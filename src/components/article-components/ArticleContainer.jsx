import Article from "./Article";
import Heading from "../utility components/Heading.jsx";
import HeadingContainer from "../utility components/HeadingContainer.jsx";
import SubHeading from "../utility components/SubHeading.jsx";
// import ARTICLES from "../../contents/articles-info.js";
import { useLoaderData, useNavigation } from "react-router-dom";
const ArticleContainer = () => {
  const data = useLoaderData();
  const navigagtion = useNavigation();

  console.log(data);

  if (navigagtion.state == "loading") return <p>Loading...</p>;

  return (
    <div className="article-container my-20">
      <HeadingContainer>
        <Heading heading="Writing on software design, website building, and the research projects." />
        <SubHeading>
          All of my long-form thoughts on programming, cloud computing, website
          design, mumbai&apos;s underbelly exploration and more, collected in
          chronological order.
        </SubHeading>
      </HeadingContainer>

      <div className="article-card-container flex flex-col md:border-l-[1px] w-[100%] dark:border-gray-700 border-b-gray-50 md:w-[80%] md:pl-5">
        {/* All articles */}
        {data.data.map((article, index) => {
          return <Article {...article} key={index} />;
        })}
        {/* End of all articles */}
      </div>
    </div>
  );
};
export default ArticleContainer;

export async function loader() {
  const res = await fetch("http://localhost:1337/api/articles?sort=date:desc");
  const data = await res.json();

  return data;
}
