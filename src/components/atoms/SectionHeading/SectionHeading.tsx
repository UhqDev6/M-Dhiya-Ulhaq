import React from "react";

type IProps = {
  children: React.ReactNode;
};

export default function SectionHeading(props: IProps) {
  const { children } = props;
  return (
    <section>
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        {children}
      </h2>
    </section>
  );
}
