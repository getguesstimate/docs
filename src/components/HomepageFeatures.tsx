import React, { FC, ReactNode } from "react";

const FeatureList = [
  {
    title: "Simple",
    description: (
      <>
        Make a great estimate in seconds. If you think a number is between 5 and
        9, simply write "5 to 9".
      </>
    ),
  },
  {
    title: "Powerful",
    description: (
      <>
        Guesstimate uses Monte Carlo sampling to correctly estimate uncertain
        results.
      </>
    ),
  },
  {
    title: "Free",
    description: (
      <>
        Create unlimited public models for free. Our code base is open source.
      </>
    ),
  },
];

const Feature: FC<{ title: string; description: ReactNode }> = ({
  title,
  description,
}) => {
  return (
    <div className="text-center">
      <h3 className="font-lora font-bold text-2xl pb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export const HomepageFeatures: FC = () => {
  return (
    <section className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
};
