import axios from "axios";
import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserLoader } from "./UserLoader";
import { DataSource } from "./DataSource";
import { ResourceLoader } from "./ResourceLoader";
import { ProductInfo } from "./ProductInfo";
import { UserInfo } from "./UserInfo";

// this function just pulls the data from the server

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

// this function just pulls the data from the local storage
const getLocalStorage = (key) => () => {
  return localStorage.getItem(key);
};

// text component
const Text = ({ message }) => <h1>{message}</h1>;

//  the getServerData function is a higher-order function that returns a function that can be used as the getDataFunc prop in the DataSource component.
function App() {
  return (
    <>
      <DataSource getDataFunc={getServerData("/users/123")} resourceName="user">
        <UserInfo />
      </DataSource>
      <DataSource
        getDataFunc={getLocalStorage("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
}

export default App;
