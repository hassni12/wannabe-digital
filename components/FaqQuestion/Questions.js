import { Collapse } from "antd";
const { Panel } = Collapse;

const Questions = (props) => {
  const panels = [
    {
      title: "What is digital marketing?",
      content: `The term digital marketing refers to all online advertising and marketing techniques, including search engine optimization (SEO), content marketing, social media, and more.`,
    },
    {
      title: "What are the advantages of digital marketing?",
      content: `There are endless advantages of digital marketing! The main objective of digital marketing is to increase the number of qualified users who visit your website. You can help people navigate their online experiences using a variety of digital marketing strategies, which will increase the number of conversions for your company.`,
    },
    {
      title: "What is Search Engine Optimization (SEO)?",
      content: `Search engine optimization is a process that promotes and optimises your website to rank for particular keyword searches. Google shows the top websites related to the particular search. With the help of our SEO strategies, search engines will be informed that your website is among the top results for the online query that the user is looking for.`,
    },
    {
      title: "How do SEO and PCC differ from one another?",
      content: `Organic traffic that you DO NOT PAY FOR is brought to your website by SEO efforts. PPC, or pay-per-click, directs purchased visitors to your website. PPC is more of a short traffic spike that does not have the same long-lasting impacts as SEO, which is a long-term investment with results that last.`,
    },
    {
      title: "Why should I get a website for my business?",
      content: `Since every small business is unique, its website will also be special. Although building a new website may seem difficult, Wannabee is here to make it simple. A good website is made to attract, engage, and maintain users. By giving customers a simple way to purchase goods and services, websites also help boost sales in the present market.`,
    },
  ];
  return (
    <Collapse
      ghost
      className=""
      style={{ marginTop: "-5rem" }}
    >
      {panels?.map((p, key) => {
        return (
          <>
          <Panel key={key} header={p.title} style={{fontWeight: "bold", fontSize: "1rem"}}>
            <p style={{fontSize: "1rem", fontWeight: "normal"}}>{p.content}</p>
          </Panel>
          <hr style={{marginTop: "-.5rem", width:"90%", marginLeft: "1rem"}} />
          </>
        );
      })}
    </Collapse>
  );
};

export default Questions;
