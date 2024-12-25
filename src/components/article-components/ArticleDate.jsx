import formatGeneralDate from "../utility components/formatted-date";
export default function ArticleDate(prop) {
  const articleDate = new Date(prop.articleDate);
  return (
    <div className="text-gray-500 px-7 md:p-7 md:px-0 my-3 w-[90%]">
      <div className="article-row flex flex-col md:flex-row">
        {formatGeneralDate(articleDate)}
      </div>
    </div>
  );
}
