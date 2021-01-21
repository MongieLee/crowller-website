declare namespace responseResult {
  interface CrowlleItem {
    title: string;
    grade: number;
    time: string;
  }

  type isLogin = boolean;
  type login = boolean;

  type getData = boolean;
  type showData = CrowlleItem[];
}
