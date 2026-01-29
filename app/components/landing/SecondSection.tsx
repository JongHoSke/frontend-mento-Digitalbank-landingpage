import CardComponent from "../card/CardComponent";
import { Second_Card_List } from "@/app/assets/data/cardDatas";
const SecondSection = () => {
  console.log("Second_Card_List", Second_Card_List);
  return (
    <>
      <section className="bg-gray-100 h-169">
        <div className="">
          <h2>Why choose Digitalbank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="">
          <article>
            {Second_Card_List.map((item) => {
              return <CardComponent key={item.id} {...item} variant="icon" />;
            })}
          </article>
        </div>
      </section>
    </>
  );
};

export default SecondSection;
