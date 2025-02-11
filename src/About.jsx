const MyexperienceList = [
    {
      id: 1,
      title: "Education",
      para: `I'm a second-year Software Engineering student at IAU. The university provides a strong foundation in Probability, Data Structures & Algorithms, and Software Design. We've also studied C and Java. Alongside my studies, I have been self-learning front-end development to start earning while being a student.`,
    },
    {
      id: 2,
      title: "Career Goals",
      para: `My goal is to become a backend developer specializing in .NET, focusing on scalable applications, database management, and API development. Beyond backend, I'm interested in DevOps engineering, where I aim to work with CI/CD pipelines, cloud infrastructure, automation, and containerization using tools like Docker and Kubernetes. My goal is to streamline deployments and enhance system reliability.`,
    },
  ];
  

  function MoreAboutMe(){

    return(
        <div className="w-[100%] relative flex justify-center items-center overflow-hidden">
          <div className="w-[300px] h-[300px] absolute left-52 bg-pink-900/50 rounded-full rotate-45 blur-3xl dark:bg-pink-900/50"></div>
         <ul className="p-20 lg:w-[90%]  z-10 sm:w-full max-sm:w-full">
            {MyexperienceList.map(ele=>{
                return(
                    <li key={ele.id} className={`flex justify-center items-center lg:gap-40 mb-12 lg:flex-row ${ele.id % 2 == 0 ? 'lg:flex-row-reverse': ""} md:flex-col md:gap-5 sm:flex-col sm:gap-5 max-sm:flex-col max-sm:gap-5`}>
                        <p className="w-40 text-2xl font-bold text-zinc-800 dark:text-zinc-200">{ele.title}</p>
                        <p className="text-md text-zinc-800 font-semibold dark:text-zinc-200 sm:w-[100%] max-sm:min-md:w-fulld">{ele.para}</p>
                    </li>
                )
            })}
            </ul>
        </div>
    )
  }

  export {MoreAboutMe}