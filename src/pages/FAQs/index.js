import React from "react";
import style from "./faq.module.css";
const MOCK_DATA_ACCORDIAN = [
  {
      id: 1,
      title: "How to buy NFTs?",
      para: `It has roots in a piece of classical Latin literature from 45 BC, making it over
       2000 years old Richard McClintock, a Latin professor at Hampden Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passag`
  },
  {
      id: 2,
      title: "How to create NFTs?",
      para: `ld Richard McClintock, a Latin professor at Hampden Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passag`

  },
  {
      id: 3,
      title: "How to join the auction?",
      para: `It has roots in a piece of classical Latin literature from 45 BC, making it over
       2000 years old Richard McClintock, a Latin professor at Hampden Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passag`


  },
  {
      id: 4,
      title: "How to withdraw the coin?",
      para: `It has roots in a piece of classical Latin literature from 45 BC, making it over
       2000 years old Richard McClintock, a Latin professor at Hampden Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passag`

  },
  {
      id: 5,
      title: "Does the transaction worth it?",
      para: `It has roots in a piece of classical Latin literature from 45 BC, making it over
       2000 years old Richard McClintock, a Latin professor at Hampden Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passag`
  }
]

export default function FAQs() {
  return (
    <div id='faq' className={style.section}>
      <div className="container">
        <div className={`row ${style.row}`}>
          <div className={`col-lg-4 mb-4 mt-lg-0 ${style.leftColumn}`}>
            <h1 className={style.leftHeading}>
              FAQs
            </h1>
            <p className={style.leftText}>
              What people usually ask
            </p>
          </div>
          <div className="col-lg-8">
            <div className="accordion" id="accordionExample">
              <div className="row px-3 px-md-0">
                {MOCK_DATA_ACCORDIAN.map((item, i) => (
                  <React.Fragment key={item.id}>
                    <div className={`col-md-12 col-sm-12 ${style.content}`}>
                      <h5
                        className={`accordion-header ${style.title}`}
                        id="headingOne"
                      >
                        <button
                          className={`accordion-button ${style.button} ${i !== 0 ? 'collapsed' : ''}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseOne${i}`}
                          aria-expanded={i === 0 ? true : false}
                          aria-controls={`collapseOne${i}`}
                        >
                          {item.title}
                        </button>
                      </h5>
                      <div
                        id={`collapseOne${i}`}
                        className={`accordion-collapse collapse ${i === 0 ? "show" : null
                          }`}
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div>
                          <p className={style.text}>{item.para}</p>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}