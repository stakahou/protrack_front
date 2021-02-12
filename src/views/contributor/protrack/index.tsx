import { faPaperPlane, faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormHandles } from "@unform/core";
import { observer } from "mobx-react-lite";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Button, CardBody } from "reactstrap";
import { Header } from "../../../components/header";
import { Loading } from "../../../components/loading";
import { ProtrackDate } from "../../../components/protrackDate";
import {
  useAddProtrackMutation,
  useProjectLazyQuery,
  useProtracksByProjectAndWeekLazyQuery,
} from "../../../generated/hooks";
import { Protrack as IProtrack } from "../../../generated/schemas";
import { useStores } from "../../../hooks/useStores";
import { CustomCard } from "../../../styles/global";
import { ProtrackForm } from "./form";
import { Styles } from "./styles";

export const Protrack = () => {
  const [title, setTitle] = useState("PROTRACK");
  const [protracks, setProtracks] = useState<IProtrack[]>([]);
  const [date, setDate] = useState(new Date());

  const formRef = useRef<FormHandles>(null);

  const location = useLocation();

  const { projectId } = useParams();

  const [getProject, { loading: projectLoading }] = useProjectLazyQuery({
    onCompleted: ({ project }) => {
      setTitle(`PROTRACK | ${project.name}`);
    },
  });

  const [
    getProtracks,
    { loading: protracksLoading },
  ] = useProtracksByProjectAndWeekLazyQuery({
    onCompleted: ({ protracks }) => {
      console.log("protracks :>> ", protracks);
    },
  });

  const [addProtrack, { loading: addProtrackLoading }] = useAddProtrackMutation(
    {
      onCompleted: (data) => {
        console.log("data :>> ", data);
      },
      onError: (err) => {
        console.log("err :>> ", err);
      },
    }
  );

  useEffect(() => {
    if (!location.state) getProject({ variables: { id: +projectId } });

    getProtracks({
      variables: {
        projectId: +projectId,
        week: moment(date).week(),
        year: moment(date).year(),
      },
    });
  }, []);

  const submitProtrack = async ({ protracks }: any) => {
    console.log("protracks :>> ", protracks);

    const week = moment(date).week();
    const year = moment(date).year();

    addProtrack({
      variables: {
        projectId: +projectId,
        protracks: protracks.map((p: any) => ({ ...p, week, year })),
      },
    });
  };

  const weekChange = (week: number, date: Date) => setDate(date);

  return (
    <Styles>
      <Header icon={faTasks} title={title} />

      <CustomCard>
        <CardBody>
          <Loading
            loading={addProtrackLoading || protracksLoading || projectLoading}
          >
            <div className="d-flex justify-content-between">
              <ProtrackDate weekChange={weekChange} selected={date} inline />

              <div className="d-flex flex-column w-100 ml-4">
                <Button
                  color="primary"
                  className="mb-3 ml-auto"
                  onClick={() => formRef.current?.submitForm()}
                >
                  <FontAwesomeIcon icon={faPaperPlane} /> Enviar
                </Button>

                <ProtrackForm
                  ref={formRef}
                  onSubmit={submitProtrack}
                  initialData={{ protracks: [] }}
                />
              </div>
            </div>
          </Loading>
        </CardBody>
      </CustomCard>
    </Styles>
  );
};
