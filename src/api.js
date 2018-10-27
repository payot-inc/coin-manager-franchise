// import axios from 'axios';
import axios from 'axios';

const HOST = 'http://localhost:3000';

// 경로 추출
function getPath(path, params = null, query = null) {
  let pathParam = path;

  if (params) {
    Object.keys(params).forEach((key) => {
      pathParam = pathParam.replace(`:${key}`, `${params[key]}`);
    });
  }

  if (query) {
    const pathQuery = Object.keys(query).map(key => `${key}=${encodeURI(query[key])}`).join('&');
    return `${HOST}${pathParam}?${pathQuery}`;
  }
  return `${HOST}${pathParam}`;
}


export default {
  // 본사 로그인
  login(email, password) {
    const path = getPath('/franchise/login');
    return axios.post(path, { email, password })
      .then(response => response.data);
  },

  // 업체 회원가입
  signUpCompany(franchiseId, company, owner, machines) {
    const path = getPath('/company');
    const insertCompany = company;
    insertCompany.franchiseId = franchiseId;

    return axios.post(path, insertCompany)
      .then((response) => {
        const responseCompanyId = response.data.id;
        const machineAddPath = getPath('/machine/bluk');
        const ownerAddPath = getPath('/company/:id/owner', { id: responseCompanyId });

        const requestMachines = axios.post(machineAddPath, machines.map((m) => {
          const machine = m;
          machine.companyId = responseCompanyId;

          return machine;
        }));
        const requestOwner = axios.post(ownerAddPath, owner);

        return Promise.all(Promise.resolve(response), requestOwner, requestMachines);
      });
  },

  // 본사 판매목록 가져오기
  getFranchiseSales(franchiseId, start, end) {

  },

  // 단일업체 기간별 조회
  getCompanySales(franchiseId, companyId, start, end) {

  },
};
