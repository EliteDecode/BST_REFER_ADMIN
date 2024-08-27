import { sideBarLinks } from "@/utils/dashboardContents";

export const getDashboardTitle = (link: string) => {
  console.log(link);
  for (const section of sideBarLinks) {
    for (const item of section.content) {
      if (link.includes(item.link)) {
        return item.Title;
      }
    }
  }
  return null;
};
