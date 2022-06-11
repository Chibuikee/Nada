import React from "react";
export default function Testimonials() {
  const feedbacks = [
    {
      clientName: "Dan Kremer",
      text: `ve always tried to dip my hands in real
      estate investment. This looks like a good way to get 
      started and from city around the county.
      I’m super excited!`,
      clientType: "HOMEOWNER",
      location: "DALLAS",
    },
    {
      clientName: "Dan Kremer",
      text: `ve always tried to dip my hands in real
      estate investment. This looks like a good way to get 
      started and from city around the county.
      I’m super excited!`,
      location: "AUSTIN",
      clientType: "HOMEOWNER",
    },
    {
      clientName: "Dan Kremer",
      text: `ve always tried to dip my hands in real
        estate investment. This looks like a good way to get 
        started and from city around the county.
        I’m super excited!`,
      location: "DALLAS",
      clientType: "INVESTOR",
    },
  ];
  const testimonials = feedbacks.map((feedback, index) => (
    <div className="feedBack">
      <span>{feedback.clientName}</span>
      <p>{feedback.text}</p>
      <h4
        style={{
          color: `${
            index === 0 ? "#00833D" : index === 1 ? "#C22627" : "#26397e"
          }`,
        }}
      >{`${feedback.location} ${feedback.clientType}`}</h4>
    </div>
  ));
  return (
    <div className="testimonials">
      <p>TESTIMONIALS</p>
      <h3>Hear from other Nada customers.</h3>
      <div className="feedBacks">{testimonials}</div>
    </div>
  );
}
// style={{ overflowY: `${feedbacks.length > 3 ? "auto" : "none"}` }}
