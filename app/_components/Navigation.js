import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/cabins" className="hover:text-accent-400 transition-colors">
            Cabins
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-accent-400 transition-colors">
            About
          </Link>
        </li>
        <li>

          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors flex items-center gap-4"
          >
            {session?.user?.image ?
              <div className="aspect-square h-8 relative object-cover">
                <Image
                  fill
                  className="rounded-full"
                  alt={session.user.name}
                  src={session.user.image}
                  referrerPolicy="no-referrer"
                />
              </div>
              : ""}
            <span>Guest area</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
