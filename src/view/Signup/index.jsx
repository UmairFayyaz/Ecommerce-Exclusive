import { Button, Form, Input } from "antd";
import image from "../../assist/image/Side Image.png";
import icon from "../../assist/image/Icon-Google.svg";
import { Link } from "react-router";
const Signup = () => {
  return (
    <div
      className="h-full flex justify-between items-center mt-[50px] min-h-[600px]"
      dir="ltr"
    >
      <div className="w-full h-full hidden lg:block">
        <img src={image} alt="Signup image" />
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[400px]  ">
          <h1 className="text-[36px] font-medium">Create an account</h1>
          <p className="text-[16px] font-medium">Enter your details below</p>
          <Form name="basic" autoComplete="off" className="mt-[30px]">
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input
                placeholder="Name"
                className="border-0 border-b-[1px] text-[16px] font-medium h-[40px]"
                autocomplete={false}
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                placeholder="Email or Phone Number"
                className="border-0 border-b-[1px] text-[16px] font-medium h-[40px]"
                autocomplete={false}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                placeholder="Password"
                className="border-0 border-b-[1px] text-[16px] font-medium h-[40px] "
                autocomplete={false}
              />
            </Form.Item>

            <button
              type="submit"
              className="px-[30px] py-[12px] w-full h-max bg-[#DB4444] text-white rounded  font-semibold "
            >
              Create Account
            </button>
            <button
              type="button"
              className="px-[30px] py-[12px] h-max w-full  rounded flex justify-center gap-3 mt-[20px] border-[1px] border-[rgba(0, 0, 0, 0.4)] font-semibold "
            >
              <img src={icon} alt="google icon" />
              Sign up with Google
            </button>

            <p className="text-center mt-[20px]">
              Already have account?{" "}
              <Link to="/login" className="underline">
                Log in
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
