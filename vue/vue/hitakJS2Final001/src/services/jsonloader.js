import http from "../http=common";

class jsonLoader {
    get(jsonFileName) {
            return http.get(jsonFileName);
        }
    }

export default new jsonLoader;