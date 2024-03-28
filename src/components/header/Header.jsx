import DesktopHeader from "./HeaderDesktop";
import HiddenSections from "./HiddenSections";
import MobileHeader from "./HeaderMobile";


export default function Header() {

  return (
    <header>
      <MobileHeader/>
      <DesktopHeader />
      <HiddenSections />
    </header>
  );
}
