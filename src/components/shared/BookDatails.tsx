import Files from "../../components/pageMassges/DatailsMassge/Files"
import PersonInfo from "../../components/pageMassges/DatailsMassge/PersonInfo"

function BookDatails() {
    return (
        <div className="start-section">
            <form className="flex flex-col gap-4">
                {/* person info */}
                <PersonInfo />
                {/* Send and Receive */}
                <div className="pb-5 border-text">
                    <div className="flex w-full items-center justify-between">
                        <p className="text-text-head font-medium text-base">541545</p>
                        <div className="flex items-center gap-5 font-medium text-base">
                            <p className="text-primary-150">عام</p>
                            <p className="text-success px-5 py-2 rounded-full bg-success-light">قيد الانجاز</p>
                        </div>
                    </div>
                    <h4 className="text-primary-150 text-base font-medium mt-2">المرسل: الموارد البشرية - المستقبل: الحسابات</h4>
                </div>
                {/* content massge */}
                <div className="pb-5 border-text">
                    <h4 className="text-primary-150 text-base font-medium mt-2">طلب اجازة من المدير العام</h4>
                    <p className="text-text-body text-balance text-sm leading-7 font-medium mt-2">تحية طيبة وبعد، <br />

                        أرجو من حضرتكم التكرم بالموافقة على طلبي للحصول على إجازة لمدة 21 يوماً، وذلك ابتداءً من 23 ديسمبر وحتى 12 يناير، وذلك لظروف السفر. <br />
                        سأحرص على استكمال جميع المهام المطلوبة مني قبل بدء الإجازة، كما سأكون متاحًا لأي استفسارات أو توجيهات لضمان سير العمل بسلاسة خلال فترة غيابي. <br />
                        شاكرًا لكم تعاونكم وتفهمكم، وأتطلع إلى موافقتكم الكريمة. <br />

                        مع خالص التقدير،محمد القحطاني</p>
                </div>
                {/* notes */}
                <div className="pb-5 border-text">
                    <p className="text-primary-150 text-base font-medium mt-2">الملاحظات</p>
                    <p className="text-base text-text-body mt-2">الرجاء الرد على الكتاب قبل أسبوع من الأن.</p>
                </div>
                {/* files */}
                <Files />
                {/*  */}
                <div className="space-y-2">
                    <p className="text-primary-150 text-base font-medium">رد على الكتاب</p>
                    <p className="text-base text-text-body">تم قبول الأجازة ويجب العودة بعد أسبوع من الأن.</p>
                </div>

            </form>
        </div>
    )
}

export default BookDatails
