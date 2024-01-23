import "./App.css";
import { Layout } from "./components/layout/Layout";
import { NewsletterContainer } from "./components/newsletterContainer/NewsletterContainer";
function App() {
  return (
    <>
      <Layout>
        <NewsletterContainer />
      </Layout>
    </>
  );
}

export default App;
