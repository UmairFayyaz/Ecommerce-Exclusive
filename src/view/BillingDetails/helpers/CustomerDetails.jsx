import { Checkbox, Form, Input } from "antd";

const CustomerDetails = () => {
  return (
    <div dir="ltr">
      <h1 className="text-[36px] font-medium">Billing Details</h1>

      <Form.Item
        className="mb-[15px] mt-[10px]"
        label="First Name"
        name="firstName"
        rules={[
          {
            required: true,
            message: "Please input your First Name!",
          },
        ]}
      >
        <Input className=" text-[16px] font-medium h-[40px] mt-0" />
      </Form.Item>
      <Form.Item
        className="mb-[15px]"
        label="Company Name"
        name="companyName"
        rules={[
          {
            required: false,
            //   message: "Please input your First Name!",
          },
        ]}
      >
        <Input className=" text-[16px] font-medium h-[40px] mt-0" />
      </Form.Item>
      <Form.Item
        className="mb-[15px]"
        label="Street Address"
        name="streetAddress*"
        rules={[
          {
            required: true,
            message: "Please input your Street Address!",
          },
        ]}
      >
        <Input className=" text-[16px] font-medium h-[40px] mt-0" />
      </Form.Item>
      <Form.Item
        className="mb-[15px]"
        label="Apartment, floor, etc. (optional)"
        name="floor"
        rules={[
          {
            required: false,
            //   message: "Please input your Apartment, floor, etc. (optional)!",
          },
        ]}
      >
        <Input className=" text-[16px] font-medium h-[40px] mt-0" />
      </Form.Item>
      <Form.Item
        className="mb-[15px]"
        label="Town/City"
        name="city"
        rules={[
          {
            required: true,
            message: "Please input your Town/City!",
          },
        ]}
      >
        <Input className=" text-[16px] font-medium h-[40px] mt-0" />
      </Form.Item>
      <Form.Item
        className="mb-[15px]"
        label="Phone Number"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Please input your Phone Number!",
          },
        ]}
      >
        <Input className=" text-[16px] font-medium h-[40px] mt-0" />
      </Form.Item>
      <Form.Item
        className="mb-[15px]"
        label="Email Address"
        name="emailAddress"
        rules={[
          {
            required: true,
            message: "Please input your Email Address!",
          },
        ]}
      >
        <Input className=" text-[16px] font-medium h-[40px] mt-0" />
      </Form.Item>

      <div className="flex gap-3 items-center mt-[20px]">
        <Checkbox />
        <p className="text-[16px] font-normal">
          Save this information for faster check-out next time
        </p>
      </div>
    </div>
  );
};
export default CustomerDetails;
