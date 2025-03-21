import { assets } from "../../assets/assets"
import Button from "../../components/shared/Button"
import InputField from "../../components/shared/InputField"

function Logout() {
    return (
        <section>
            <div className="flex items-center bg-bg ">
                <div className="relative hidden md:block w-full h-screen">
                    <div className=" absolute w-full h-full p-2 overflow-hidden">
                        <img
                            src={assets.loginCover}
                            alt="cover"
                            className="h-full w-full object-cover lg:object-fill rounded-[15px] overflow-hidden"
                            style={{
                                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%, 10% 50%)"
                            }}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center h-screen">
                    <div className="text-center flex items-center flex-col">
                        <img className="w-32 mb-5" src={assets.logo} alt="logo" />
                        <h2 className="text-text-head text-xl font-bold">تسجيل الدخول</h2>
                        <p className="text-text-body text-base font-normal mt-2">الرجاء إدخال بياناتك لتسجيل دخولك.</p>
                    </div>
                    <form className="w-[80%] md:w-[55%] mt-8">
                        <div className="flex flex-col gap-4">
                            <InputField className="!bg-white" label="أسم المستخدم" name="name" onChange={() => { }} type="text" placeholder="الرجاء إدخال أسم المستخدم." />
                            <InputField className="!bg-white" label="كلمة المرور" name="password" onChange={() => { }} type="password" placeholder="الرجاء إدخال كلمة المرور." />
                        </div>
                        <Button type="submit" className="w-full mt-7">تسجيل الدخول</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Logout
