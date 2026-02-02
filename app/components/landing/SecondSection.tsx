import Card from "../card/Card";
import { Second_Card_List } from "@assets/data/cardDatas";
const SecondSection = () => {
  console.log("Second_Card_List", Second_Card_List);
  return (
    <>
      <section className="bg-gray-100 px-5 py-15 text-center md: md:h-169 md:px-40 md:py-20">
        <div className=" md:mb-20">
          <h2 className="text-4xl font-medium mb-6 mx-auto max-w-2xs md:mx-0 md:min-w-full md:text-left md:mb-9">
            Why choose Digitalbank?
          </h2>
          <p className="mb-15 md:text-left text-gray-600 md:w-xl">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="md:grid md:grid-cols-4 md:m-auto">
          {Second_Card_List.map((item) => {
            return <Card key={item.id} {...item} variant="icon" />;
          })}
        </div>
      </section>
    </>
  );
};

export default SecondSection;
