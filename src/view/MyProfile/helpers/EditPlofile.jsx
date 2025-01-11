import { Form, Input } from "antd";

const EditProfile = () => {
  return (
    <div
      className=" py-[40px] px-[80px] rounded-lg w-full"
      style={{ boxShadow: "0px 1px 13px 0 rgba(0, 0, 0, 0.05)" }}
    >
      <h1 className="text-[20px] font-medium text-[#DB4444]">
        Edit Your Profile
      </h1>
      <Form
        name="basic"
        layout="vertical"
        autoComplete="off"
        className="mt-[20px] flex flex-wrap w-full gap-3"
      >
        <Form.Item
          className="mb-[0px]  w-full lg:w-[48%]"
          label="First Name"
          name="firstName"
        >
          <Input
            className=" text-[16px] font-medium h-[40px] mt-0"
            placeholder="First Name"
          />
        </Form.Item>
        <Form.Item
          className="mb-[0px] w-full lg:w-[48%]"
          label="Last Name"
          name="lastName"
        >
          <Input
            className=" text-[16px] font-medium h-[40px] mt-0"
            placeholder="Last Name"
          />
        </Form.Item>
        <Form.Item
          className="mb-[0px] w-full lg:w-[48%]"
          label="Email"
          name="email"
        >
          <Input
            className=" text-[16px] font-medium h-[40px] mt-0"
            placeholder="email@email.com"
          />
        </Form.Item>
        <Form.Item
          className="mb-[0px] w-full lg:w-[48%] "
          label="Address"
          name="address"
        >
          <Input
            className=" text-[16px] font-medium h-[40px] mt-0"
            placeholder="Address"
          />
        </Form.Item>
        <Form.Item
          className="mb-[0px] w-full"
          label="Password Changes"
          name="currentPassword"
        >
          <Input.Password
            className=" text-[16px] font-medium h-[40px] mt-0"
            placeholder="Current Passwod"
          />
        </Form.Item>
        <Form.Item className="mb-[0px] w-full" name="newPasswod">
          <Input.Password
            className=" text-[16px] font-medium h-[40px] mt-0"
            placeholder="New Passwod"
          />
        </Form.Item>
        <Form.Item className="mb-[0px] w-full" name="confirmNewPasswod">
          <Input.Password
            className=" text-[16px] font-medium h-[40px] mt-0"
            placeholder="Confirm New Passwod"
          />
        </Form.Item>
        <div className="flex justify-end w-full">
          <div className="flex items-center gap-3">
            <button className="px-[10px] py-[12px] h-max  text-black rounded mt-[20px]">
              Cancel
            </button>
            <button className="px-[30px] py-[12px] h-max bg-[#DB4444] text-white rounded mt-[20px]">
              Save Changes
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default EditProfile;
