
import Image from "next/image";
import Link from "next/link";

export default function MenuBar() {

    return (
    <div className="fixed bottom-7 w-full bg-white flex justify-around items-center py-4 px-2">
        <Link
            href="/"
            className="">
            <Image
                  src="/icons/icon-home.svg"
                  alt="홈으로"
                  width={23}
                  height={23}
                />
        </Link>

        <Link
            href="/"
            className="">
            <Image
                  src="/icons/icon-calendar.svg"
                  alt="달력"
                  width={23}
                  height={23}
                />
        </Link>

        <Link
            href="/"
            className="">
            <Image
                  src="/icons/icon-add-diary.svg"
                  alt="일기작성"
                  width={43}
                  height={43}
                />
        </Link>

        <Link
            href="/"
            className="">
            <Image
                  src="/icons/icon-diary.svg"
                  alt="일기"
                  width={23}
                  height={23}
                />
        </Link>

        <Link
            href="/"
            className="">
            <Image
                  src="/icons/icon-mypage.svg"
                  alt="마이페이지"
                  width={23}
                  height={23}
                />
        </Link>
    </div>

    )
}