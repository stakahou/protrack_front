import { FC } from "react";
import { ListGroup, ListGroupItem, Media } from "reactstrap";
import styled from "styled-components";
import { Protrack, User } from "../../../../generated/schemas";

const Styles = styled.div`
  img {
    height: 64px !important;
  }
`;

type IProtrack = Pick<User, "picture" | "id" | "full_name"> & {
  protracks: Pick<Protrack, "issue" | "id" | "description">[];
};

interface Props {
  protrack: IProtrack;
}

export const ContributorProtacks: FC<Props> = ({ protrack }) => {
  const { picture, full_name, protracks } = protrack;

  return (
    <Styles>
      <Media>
        <Media left className="mr-3">
          <Media
            object
            className="rounded-circle shadow"
            src={picture}
            alt="avatar"
          />
        </Media>
        <Media body>
          <Media heading className="h5">
            {full_name}
          </Media>

          <ListGroup flush>
            {protracks.map(({ issue, description, id }) => (
              <ListGroupItem key={id}>
                [{issue}] - {description}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Media>
      </Media>
    </Styles>
  );
};
