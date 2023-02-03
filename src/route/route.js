import { useState, useEffect } from 'react';
const useLink = "https://projetcloudenchere-production.up.railway.app/";
class Link {
    getUseLink() {
        return useLink;
    }
}
export default new Link();