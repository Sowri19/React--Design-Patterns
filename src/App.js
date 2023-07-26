import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";
import { ProductInfo } from "./ProductInfo";
import { ResourceLoader } from "./ResourceLoader";
function App() {
  return (
    <>
      <ResourceLoader resourceUrl="/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/products/1234" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
