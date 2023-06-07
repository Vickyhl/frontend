import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import CreateMenu from "./CreateMenu";
import React from "react";
import UserMenus from "./UserMenus.js";
import HealthDec from "./HealthDec";
import TermsOfUse from "./TermsOfUse";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import Menu from "./Menu";
import RecipesMenu from "./RecipesMenu";
import WatchRecipesMenu from "./WatchRecipesMenu";
import Recipe from "./Recipe";
import MenuList from "./MenuList";
import Snack from "./Snack";
import Card from "./Card";
import CheckoutForm from "./CheckoutForm";
import Receipt from "./Receipt";
import About from "./About";
import Donation from "./Donation";
import Articles from "./Articles";
import Contact from "./Contact";
import CityChoice from "./CityChoice.js";
import GymMaps from "./GymMaps";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import ExTemplate from "./ExTemplate";
import Cook from "./Cook";
import Nutrients from "./Nutrients";

import MenBeg from "./MenBeg";
import LegsExMenBeg from "./workouts/menBeg/LegsExMenBeg";
import MenAdv from "./MenAdv";

import ChestExMenBeg from "./workouts/menBeg/ChestExMenBeg";
import BackHandMenBegEx from "./workouts/menBeg/BackHandMenBegEx";
import BackMenBegEx from "./workouts/menBeg/BackMenBegEx";
import ShouldersMenBegEx from "./workouts/menBeg/ShouldersMenBegEx";
import FrontHandMenBegEx from "./workouts/menBeg/FrontHandMenBegEx";

import MenAdvChest from "./workouts/menAdv/MenAdvChest";
import MenAdvBackHand from "./workouts/menAdv/MenAdvBackHand";
import MenAdvShoulders from "./workouts/menAdv/MenAdvShoulders";
import MenAdvBack from "./workouts/menAdv/MenAdvBack";
import MenAdvFrontHand from "./workouts/menAdv/MenAdvFrontHand";
import MenAdvLegs from "./workouts/menAdv/MenAdvLegs";

import WomenBeg from "./WomenBeg";
import WomenAdv from "./WomenAdv";
import WomenBegBackLeg from "./workouts/womenBeg/WomenBegBackLeg";
import WomenBegFrontLeg from "./workouts/womenBeg/WomenBegFrontLeg";
import WomenBegBack from "./workouts/womenBeg/WomenBegBack";
import WomenBegFrontHand from "./workouts/womenBeg/WomenBegFrontHand";
import WomenBegBackHand from "./workouts/womenBeg/WomenBegBackHand";

import WomenAdvBackLeg from "./workouts/womenAdv/WomenAdvBackLeg";
import WomenAdvFrontLeg from "./workouts/womenAdv/WomenAdvFrontLeg";
import WomenAdvBack from "./workouts/womenAdv/WomenAdvBack";
import WomenAdvFrontHand from "./workouts/womenAdv/WomenAdvFrontHand";
import WomenAdvBackHand from "./workouts/womenAdv/WomenAdvBackHand";
import WomenAdvBackLeg2 from "./workouts/womenAdv/WomenAdvBackLeg2";
import WeightTrack from "./WeightTrack";
import WachGrocery from "./WachGrocery";
import EditGrocery from "./EditGrocery";
import DietitianWatchRegularMenus from "./DietitianWatchRegularMenus";
import EditRegularMenu from "./EditRegularMenu";
import DieticianWatchRecMenu from "./DieticianWatchRecMenu";

const Routes1 = () => {
  let userData = localStorage.getItem("user");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myProfile" element={<Profile />} />
      <Route path="/HealthDec" element={<HealthDec />} />
      <Route path="/TermsOfUse" element={<TermsOfUse />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/:userId/menus" element={<UserMenus />} />
      <Route path="/watchMenu" element={<MenuList />} />
      <Route path="/menu/:mid" element={<Menu />} />
      <Route path="/recipesMenu/:mid" element={<RecipesMenu />} />
      <Route path="/recipe/:rid" element={<Recipe />} />
      <Route path="/watchRecipesMenu" element={<WatchRecipesMenu />} />
      <Route path="/watchSnack/:type" element={<Snack />} />
      <Route path="/checkout" element={<CheckoutForm />} />
      <Route path="/card/:t" element={<Card />} />
      <Route path="/receipt/:type" element={<Receipt />} />
      <Route path="/About" element={<About />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/contactUs" element={<Contact />} />
      <Route path="/cityChoice" element={<CityChoice />} />
      <Route path="/gymMaps/:country/:city" element={<GymMaps />} />
      <Route path="/editProfile" element={<EditProfile />} />
      <Route path="/ExTemplate" element={<ExTemplate />} />
      <Route path="/cooking/:rid" element={<Cook />} />
      <Route path="/nutrients/:rName/:rid" element={<Nutrients />} />
      <Route path="/weightTrack" element={<WeightTrack />} />
      <Route path="/watchGrocery" element={<WachGrocery />} />
      <Route path="/editGrocery" element={<EditGrocery />} />
      <Route path="/showRegMenus" element={<DietitianWatchRegularMenus />} />
      <Route path="/editMenu/:mid" element={<EditRegularMenu />} />
      <Route path="/dietician/:mid" element={<DieticianWatchRecMenu />} />

      <Route path="/men/beginners" element={<MenBeg />} />
      <Route path="/men/advanced" element={<MenAdv />} />
      <Route path="/women/beginners" element={<WomenBeg />} />
      <Route path="/women/advanced" element={<WomenAdv />} />

      <Route path="/legsMenBegExercise" element={<LegsExMenBeg />} />
      <Route path="/chestMenBegExercise" element={<ChestExMenBeg />} />
      <Route path="/backHandMenBegExercise" element={<BackHandMenBegEx />} />
      <Route path="/backMenBegExercise" element={<BackMenBegEx />} />
      <Route path="/shouldersMenBegExercise" element={<ShouldersMenBegEx />} />
      <Route path="/frontHandMenBegExercise" element={<FrontHandMenBegEx />} />

      <Route path="/menAdvChest" element={<MenAdvChest />} />
      <Route path="/menAdvBackHand" element={<MenAdvBackHand />} />
      <Route path="/menAdvShoulders" element={<MenAdvShoulders />} />
      <Route path="/menAdvBack" element={<MenAdvBack />} />
      <Route path="/menAdvFrontHand" element={<MenAdvFrontHand />} />
      <Route path="/menAdvLegs" element={<MenAdvLegs />} />

      <Route path="/womenBegBackLeg" element={<WomenBegBackLeg />} />
      <Route path="/womenBegFrontLeg" element={<WomenBegFrontLeg />} />
      <Route path="/womenBegBack" element={<WomenBegBack />} />
      <Route path="/womenBegFrontHand" element={<WomenBegFrontHand />} />
      <Route path="/womenBegBackHand" element={<WomenBegBackHand />} />

      <Route path="/womenAdvBackLeg" element={<WomenAdvBackLeg />} />
      <Route path="/womenAdvFrontLeg" element={<WomenAdvFrontLeg />} />
      <Route path="/womenAdvBack" element={<WomenAdvBack />} />
      <Route path="/womenAdvFrontHand" element={<WomenAdvFrontHand />} />
      <Route path="/womenAdvBackHand" element={<WomenAdvBackHand />} />
      <Route path="/womenAdvBackLeg2" element={<WomenAdvBackLeg2 />} />

      <Route
        path="/login"
        element={userData === "undefined" || !userData ? <Login /> : <Home />}
      />
      <Route
        path="/createMenu"
        element={
          userData === "undefined" || !userData ? <Login /> : <CreateMenu />
        }
      />
    </Routes>
  );
};

export default Routes1;
