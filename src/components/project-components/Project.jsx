import ProjectLink from './ProjectLink';
const Project = (prop) => {
  return (
    <div className="box1 w-[100%] group flex flex-col pl-2 md:pl-8 md:pr-20 py-2 rounded-3xl hover:bg-gray-50 dark:hover:bg-[#252529] cursor-pointer">
      <span className="rounded-3xl">
        <img
          src={prop.projectLogo}
          className="w-12 rounded-3xl border-white border-8 shadow-lg my-3 dark:border-[#252529]"
          alt=""
        />
      </span>
      <h1 className="font-semibold my-2 dark:text-gray-200">{prop.projectHeader}</h1>
      <p className="text-stone-500 text-sm my-2 dark:text-stone-500 line-clamp-3">
        {prop.projectDescription}
      </p>
      <ProjectLink buttonText={prop.buttonText} projectLink={prop.projectLink} />
    </div>
  );
};


export default Project;