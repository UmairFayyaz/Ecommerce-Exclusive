import { Button, Form, Input } from "antd";
import image from "../../assist/image/Side Image.png";
const Login = () => {
  return (
    <div
      className="h-full flex justify-between items-center mt-[50px] min-h-[600px]"
      dir="ltr"
    >
      <div className="w-full h-full hidden lg:block">
        <img src={image} alt="login image" />
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[400px] ">
          <h1 className="text-[36px] font-medium">Log in to Exclusive</h1>
          <p className="text-[16px] font-medium">Enter your details below</p>
          <Form name="basic" autoComplete="off" className="mt-[30px]">
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

            <div className="flex justify-between items-center mt-[30px]">
              <button
                type="submit"
                className="px-[30px] py-[12px] h-max bg-[#DB4444] text-white rounded "
              >
                View All Products
              </button>
              <button className="text-[#DB4444] text-[16px] font-semibold">
                Forget Password?
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
