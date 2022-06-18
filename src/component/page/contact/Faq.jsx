import React from "react";

const Faq = () => {
  return (
    <section className="faq">
      <div className="container">
        <div className="container__main">
          <div className="main">
            <h3 className="text-blue"> FAQ</h3>
            <h2 className="title mt-4">
              Here are Some Answer For Frequntly asked Questions
            </h2>
            <p className="mt-9">
              We got alot of Message With the same Questions so here are some
              fast answer for populare Question
            </p>
          </div>
          <div className="faq__detail">
            <details>
              <summary>Do You offer Software Development</summary>
              <p className="detaile__paragraph">
                You wrap a <code>details</code> element around any block of HTML
                content. The browser will collapse that block of text until a
                user opens the <code>details</code> block.
              </p>
              <p className="detaile__paragraph">
                Once a user opens a <code>details</code> block, they'll be able
                to read all that hidden content!
              </p>
              <p className="detaile__paragraph">
                If you want the details block open by default, include the{" "}
                <code>open</code> attribute on the opening tag:
              </p>
            </details>
            <details open>
              <summary>Do you offer Social Media Marketing</summary>
              <p className="detaile__paragraph">
                Yes,we do offer Social Media marketing , we offer fb ads
                instgram ads ,google campagine , tiktok promotion ,and other
                social media plateforme
              </p>
            </details>
            <details>
              <summary>Do you Offer pack Services</summary>
              <p className="detaile__paragraph">
                Yes,we do offer Social Media marketing , we offer fb ads
                instgram ads ,google campagine , tiktok promotion ,and other
                social media plateforme
              </p>
            </details>
            <details>
              <summary>How long it take to realise a project</summary>
              <p className="detaile__paragraph">
                Sorry to disappoint you. Since these are native HTML elements,
                they provide useful semantic information to screen readers.
              </p>
              <p className="detaile__paragraph">
                Screen readers will typically read the <code>summary</code> for
                a collapsed <code>details</code> block (and communicate that
                it's collapsed). They'll also provide an interactive hook for
                users to open the <code>details</code> block. If the{" "}
                <code>details</code> is already expanded, they'll read the whole
                content.
              </p>
              <p className="detaile__paragraph">
                I don't rely on assistive tech to read the web, so I'm probably
                not aware of some limitations or drawbacks to using{" "}
                <code>details</code> and <code>summary</code>, but I suspect
                their AX is at least as good as (if not better than) most
                JavaScript-dependent accordion solutions.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
