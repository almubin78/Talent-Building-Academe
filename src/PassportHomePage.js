import PassportGenerator from "./passportPages/PassportGenerator";



const PassportHomePage = () => {
    const user = {
    name: "Rahim Ahmed",
    passportNo: "BD1234567",
    nationality: "Bangladeshi",
    dob: "01-01-2000",
    photo: "/student.jpg",
  };
    return (
        <div>
            <PassportGenerator/>
        </div>
    );
};

export default PassportHomePage;