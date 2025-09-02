using alm from '../db/schema';

service ALMService {
    @readonly entity Projects as projection on alm.Projects;
}
