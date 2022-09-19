import axios from 'axios';

const GROUND_BASE_REST_API_URL = 'http://localhost:8081/api/tenants/';
class TenantService{
   
    updateTenant(tenantid,tenant){
        return axios.put(GROUND_BASE_REST_API_URL+tenantid, tenant)
    }
    getTenantByTenantId(tenantid){
        return axios.get(GROUND_BASE_REST_API_URL+'/get-tenant-by-id'+'/'+tenantid)
    }


}
export default new TenantService();