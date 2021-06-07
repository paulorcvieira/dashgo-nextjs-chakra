import { Stack } from "@chakra-ui/react";

import {
  RiContactsLine,
  RiDashboardLine,
  RiBankLine,
  RiHomeGearLine,
  RiBookReadLine,
  RiBook3Line,
  RiDraftLine,
  RiFileUserLine,
} from "../../styles/icons";

import NavLink from "./NavLink";
import NavSection from "./NavSection";

export default function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="ADMINISTRAÇÃO">
        <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
        <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
        <NavLink icon={RiBankLine} href="/finances">Finanças</NavLink>
        <NavLink icon={RiHomeGearLine} href="/landing">Landing Page</NavLink>
      </NavSection>
      <NavSection title="GERAL">
        <NavLink icon={RiBookReadLine} href="/schedule">Agenda</NavLink>
        <NavLink icon={RiBook3Line} href="/process">Processos</NavLink>
        <NavLink icon={RiDraftLine} href="/models">Modelos</NavLink>
        <NavLink icon={RiFileUserLine} href="/intermediaries">Procuradores</NavLink>
      </NavSection>
    </Stack>
  );
}
