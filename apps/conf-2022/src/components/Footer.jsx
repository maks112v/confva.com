import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { RiLink } from "react-icons/ri";

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="w-auto h-12 mb-12 text-slate-900 md:mb-0" />
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center text-slate-500 hover:text-blue-500 md:justify-start">
            <a
              href={"https://goo.gl/maps/b5iVTFNtiJ9xRcbY6"}
              target="_blank"
              rel="noreferrer"
              className="text-base "
            >
              784 Dinkel Ave, Mt Crawford, VA 22841
            </a>
            <RiLink className="w-4 h-4 ml-2" />
          </div>

          <p className="mt-6 text-base text-slate-500">
            Copyright &copy; {new Date().getFullYear()} Molodezh. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
