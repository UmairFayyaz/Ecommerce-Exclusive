import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const SendMessage = () => {
  return (
    <div
      className=" py-[40px] px-[80px] rounded-lg w-full"
      style={{ boxShadow: "0px 1px 13px 0 rgba(0, 0, 0, 0.05)" }}
    >
      <Form
        name="basic"
        layout="vertical"
        autoComplete="off"
        className="mt-[20px] flex flex-wrap w-full gap-4"
      >
        <Form.Item
          className="mb-[0px]  w-full  lg:w-[31.99%]"
          name="yourName"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input
            className=" text-[16px] font-normal h-[40px] mt-0"
            placeholder="Your Name"
          />
        </Form.Item>
        <Form.Item
          className="mb-[0px] w-full  lg:w-[31.99%]"
          name="yourEmail"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            className=" text-[16px] font-normal h-[40px] mt-0"
            placeholder="Your Email"
          />
        </Form.Item>
        <Form.Item
          className="mb-[0px] w-full  lg:w-[31.99%]"
          name="yourPhone"
          rules={[
            {
              required: true,
              message: "Please input your Phone!",
            },
          ]}
        >
          <Input
            className=" text-[16px] font-normal h-[40px] mt-0"
            placeholder="Your Phone"
          />
        </Form.Item>
        <Form.Item
          className="mb-[0px] w-full"
          name="yourMessage"
          rules={[
            {
              required: true,
              message: "Please input Your Massage!",
            },
          ]}
        >
          <TextArea
            className=" text-[16px] font-normal h-[40px] mt-0"
            placeholder="Your Massage"
            autoSize={{
              minRows: 6,
              maxRows: 6,
            }}
          />
        </Form.Item>

        <div className="flex justify-end w-full">
          <button className="px-[30px] py-[12px] h-max bg-[#DB4444] text-white rounded mt-[20px]">
            Send Massage
          </button>
        </div>
      </Form>
    </div>
  );
};
export default SendMessage;
