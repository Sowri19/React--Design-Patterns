import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";
function App() {
  return (
    <>
      <UserLoader userId="123">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="234">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="345">
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
