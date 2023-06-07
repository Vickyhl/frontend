import React from "react";
import "./css/Auth.css";

const HealthDec = () => {
  return (
    <div className="authentication">
      <h1>Health Declaration</h1>
      <p>
        Health declaration + details of the nutrition plan - please read
        thoroughly: <br />{" "}
        <div className="space">
          1) I know that the menus on the website are only suitable for over 18
          years of age <br />{" "}
        </div>
        <div className="space">
          2) I know that in any special health condition such as: pregnancy,
          after birth, before and after surgery, before/during/after any medical
          treatments, diabetes, taking{" "}
          <div className="space">
            prescription drugs (except birth control pills), taking antibiotics
            or any other health/medical condition - It is <b>mandatory</b> for
            me to obtain permission to participate (there are a number of health
            conditions for which the{" "}
            <div className="space">
              programs in online format are not suitable) from a qualified
              doctor and obtain permission for the dietary change.
            </div>
          </div>
        </div>
        <div className="space">
          3) The use is the sole responsibility of the user <br />
        </div>
        <div className="space">
          4) I know that the owners of the website will not be held responsible
          for any damage if it is caused. <br />
        </div>
        <div className="space">
          5) Upon reading these regulations and health declaration and my
          participation in the programs - I confirm that I was recently examined
          by a doctor and that to the best of{" "}
          <div className="space">
            my knowledge there is no obstacle for me to participate and watch
            the programs and that I am aware that all information, advice and
            guidance provided within the nutritional
          </div>
          <div className="space">
            program are not a substitute for medical treatment
          </div>
          <div className="space">
            and/or consultation with a qualified medical official and that I do
            not intend to stop medication or other medical treatment, without
            consulting a qualified doctor.
          </div>
          <div className="space">
            6) The information does not constitute advice of any kind, including
            medical advice{" "}
          </div>
        </div>
        <div className="space">
          7) I know that any dietary change must be informed and approved by a
          qualified doctor. Obtaining such approval is the sole responsibility
          of the participant.{" "}
        </div>
        <div className="space">
          8) I know that in any case and at any stage - the registration and
          participation in the programs is subject to the professional judgment
          of Alex Veksler.{" "}
        </div>
        <div className="space">
          9) I am aware that the program is not suitable for a vegan/vegetarian
          lifestyle.{" "}
          <div className="space">
            10) I am aware that the program is not suitable for those with
            sensitivities/allergies to certain foods.
          </div>
        </div>
      </p>
    </div>
  );
};

export default HealthDec;
