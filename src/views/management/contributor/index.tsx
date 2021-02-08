import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useRef, useState } from "react";
import { CardBody } from "reactstrap";
import { Header } from "../../../components/header";
import { Loading } from "../../../components/loading";
import { CustomModalProps } from "../../../components/modal";
import ReactTable from "../../../components/table";
import { useContributorsQuery } from "../../../generated/hooks";
import { CustomCard } from "../../../styles/global";
import columns from "./columns";
import { EditContributor } from "./edit";
import { Styles } from "./styles";

export const Contributor = () => {
  const modalEditRef = useRef<CustomModalProps>(null);

  const [selectedContributor, setSelectedContributor] = useState();

  const { data, loading, refetch } = useContributorsQuery({
    fetchPolicy: "no-cache",
  });

  const contributors = useMemo(
    () =>
      (data?.contributors ?? []).map((c: any) => ({
        ...c,
        actions: {
          edit: () => {
            setSelectedContributor(c);
            modalEditRef.current?.open();
          },
        },
      })),
    [data]
  );

  return (
    <Styles>
      <Header icon={faUsers} title="COLABORADORES"></Header>

      <CustomCard>
        <CardBody>
          <Loading loading={loading}>
            <ReactTable columns={columns} data={contributors} />
          </Loading>
        </CardBody>
      </CustomCard>

      <EditContributor
        modalRef={modalEditRef}
        contributor={selectedContributor}
        refetch={refetch}
      />
    </Styles>
  );
};
