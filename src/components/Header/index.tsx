import logo from "../../assets/logoM.png";
import { Button } from "../Button";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center">
        <div className="flex items-center mr-2">
          <img
            src={logo}
            alt="logo"
            className="p-2 mr-2 rounded-2xl bg-orange-primary"
          />
          <h3 className="text-base font-semibold">homez</h3>
        </div>
        <ul className="flex items-center gap-3 text-base font-semibold cursor-pointer">
          <li>Nhà đất bán</li>
          <li>Nhà đất cho thuê</li>
          <li>Dự án</li>
          <li>Tin tức</li>
        </ul>
      </div>
      <div className="flex gap-2">
        <Button size="sm">Đăng nhập</Button>
        <Button size="sm">Đăng ký</Button>
        <Button variant="primary" size="sm">
          Đăng tin
        </Button>
      </div>
    </div>
  );
};

export default Header;
