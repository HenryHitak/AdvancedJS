import http from "../http_common";

class loadjson {
    get(loadjs) {
            return http.get(loadjs);
        }
    }

export default new loadjson;