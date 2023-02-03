import { useState, useEffect } from 'react';
const useLink = "https://projetcloudenchere-production.up.railway.app/";
// const useLink = "http://localhost:8080/";
class Link {
    getUseLink() {
        return useLink;
    }
}
export default new Link();