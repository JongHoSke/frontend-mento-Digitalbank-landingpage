import Card from "../card/Card";
import { Second_Card_List } from "@/app/assets/data/cardDatas";
const SecondSection = () => {
  console.log("Second_Card_List", Second_Card_List);
  return (
    <>
      <section className="bg-gray-100 h-169 px-60 py-20">
        <div className="md:mb-20">
          <h2 className="md:text-left md:text-4xl md:mb-9">
            Why choose Digitalbank?
          </h2>
          <p className="md:text-left text-gray-600 md:w-xl">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="md:grid md:grid-cols-4 md:m-auto md:justify-center">
          {Second_Card_List.map((item) => {
            return <Card key={item.id} {...item} variant="icon" />;
          })}
        </div>
      </section>
    </>
  );
};

export default SecondSection;
