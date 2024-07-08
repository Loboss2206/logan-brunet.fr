import React from "react";

const EducationBox = ({
  degree,
  institution,
  year,
  skills,
  specials,
  specialsWithImage,
  srcImage,
  link,
}) => {
  return (
    <div className="bg-gray-900/90 dark:bg-gray-800/80 shadow-lg shadow-gray-900/80 dark:shadow-white/50 rounded-lg p-4 mb-6">
      <a
        className="flex items-center justify-center"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={srcImage}
          className="h-28 m-3 rounded-lg bg-gray-300 border-4 border-gray-400 p-2"
        ></img>
      </a>
      <h1 className="text-2xl font-semibold text-green-500">{institution}</h1>
      <p className="text-xl text-white">{degree}</p>
      <p className="text-lg text-white">{year}</p>

      {skills.length > 0 && (
        <>
          <h4 className="text-xl font-semibold text-green-500 mt-2">Skills</h4>
          <div className="text-base text-white">
            {skills.map((skill, index) => (
              <span key={index}>
                {skill}
                {index !== skills.length - 1 && " - "}
              </span>
            ))}
          </div>
        </>
      )}

      {specials.length > 0 && (
        <>
          <h4 className="text-xl font-semibold text-green-500 mt-2">
            Specials
          </h4>
          <ul className="text-base text-white font-semibold list-disc px-4">
            {specials.map((special, index) => (
              <li key={index}>{special}</li>
            ))}
          </ul>
        </>
      )}

      {specialsWithImage.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="text-base text-white list-disc px-4">
              {specialsWithImage.map((special, index) => (
                <div key={index} className="flex-inline items-center">
                  <li className="font-semibold">{special.title}</li>
                  <a
                    href={special.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex py-2"
                  >
                    <img
                      src={special.srcImage}
                      alt={special.title}
                      className="h-24 w-auto rounded-lg bg-gray-200 border-2 border-gray-400 p-2"
                    />
                  </a>
                  <p className="text-base text-white py-2">
                    {special.description}
                  </p>
                </div>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default EducationBox;
