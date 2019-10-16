import React, { Component } from "react";
import Card from "./Card";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const FEED_QUERY = gql`
  {
    users {
      data {
        id
        name
      }
    }
  }
`;

class Kanban extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          console.log(data);
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const users = data.users.data;

          return (
            // <div>
            //   {linksToRender.map(link => (
            //     <Link key={link.id} link={link} />
            //   ))}
            // </div>
            <div className="flex px-4 pb-8 items-start overflow-x-scroll">
              <div className="border-r-2 border-gray-600 bg-grey-light  flex-no-shrink w-64 p-2 mr-3">
                <div className="flex justify-between py-1">
                  <h3 className="text-sm">New landing page</h3>
                  <svg
                    className="h-4 fill-current text-grey-dark cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
                  </svg>
                </div>
                <div className="text-sm mt-2">
                  {users.map(user => (
                    <Card key={user.id} user={user} />
                  ))}
                </div>
              </div>
              <div className="border-r-2 border-gray-600 bg-grey-light flex-no-shrink w-64 p-2 mr-3">
                <div className="flex justify-between py-1">
                  <h3 className="text-sm">Old landing</h3>
                  <svg
                    className="h-4 fill-current text-grey-dark cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
                  </svg>
                </div>
                <div className="text-sm mt-2">
                  <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                    Delete all references from the wiki
                  </div>
                </div>
              </div>
              <div className="bg-grey-light flex-no-shrink w-64 p-2 mr-3">
                <div className="flex justify-between py-1">
                  <h3 className="text-sm">Do more cards</h3>
                  <svg
                    className="h-4 fill-current text-grey-dark cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
                  </svg>
                </div>
                <div className="text-sm mt-2">
                  <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                    Whatever
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Kanban;
