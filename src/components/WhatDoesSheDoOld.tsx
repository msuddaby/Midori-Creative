import Card from "@/components/Card";

export default function WhatDoesSheDoOld() {
  return (
    <section className={"min-h-screen max-w-[85vw] m-auto"}>
      <div>
        <div>
          <Card
            headerTitle={"What does she do?"}
            subTitleHeader={"Content Creation"}
          >
            Just to be clear, when we say content we don’t just mean “content”.
            We mean truly resonate and passion-filled storytelling that people
            actually enjoy. In a world of content overload, we believe that the
            power of a good story is what in the end will stand the test of
            time.
          </Card>
          <Card subTitleHeader={"Social Media Strategy"}>
            With years of experience helping Chinese brands reach western
            audiences on social media at some of the biggest Chuhai brands, we
            specialize in social strategies with content leading the way. What
            can we say, we’re extroverted introverts.
          </Card>
          <Card subTitleHeader={"Talent Management"}>
            For us talent isn’t boiled down to reach or the number of followers
            you have; it’s truly about finding the right people to help you
            connect with the audiences you’re after. From some of the biggest
            celebs, creatives, and KOLs to just your everyday creator that has a
            great story waiting to be told, we can help you do it all.
          </Card>
        </div>
      </div>
    </section>
  );
}
