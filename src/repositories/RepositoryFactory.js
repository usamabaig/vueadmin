import adAccountRepository from "./adAccountRepositotry";

const repositories = {
    adAccount: adAccountRepository,
};

export const RepositoryFactory = {
    get: name => repositories[name]
};
