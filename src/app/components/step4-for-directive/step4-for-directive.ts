import { Component } from '@angular/core';
import { IPerson } from '../../shared/interfaces/person';

@Component({
  selector: 'app-step4-for-directive',
  imports: [],
  templateUrl: './step4-for-directive.html',
  styleUrl: './step4-for-directive.css',
})
export class Step4ForDirective {
  persons: IPerson[] = [
    {"firstname":"Ailis","lastname":"Heggadon","email":"aheggadon0@51.la"},
    {"firstname":"Kaye","lastname":"Jedrzejkiewicz","email":"kjedrzejkiewicz1@intel.com"},
    {"firstname":"Tara","lastname":"Warrior","email":"twarrior2@japanpost.jp"},
    {"firstname":"Gennifer","lastname":"Bithell","email":"gbithell3@globo.com"},
    {"firstname":"Mickie","lastname":"Glentz","email":"mglentz4@booking.com"},
    {"firstname":"Olvan","lastname":"Cornwell","email":"ocornwell5@feedburner.com"},
    {"firstname":"Addia","lastname":"Gantzman","email":"agantzman6@sfgate.com"},
    {"firstname":"Alena","lastname":"McDuffie","email":"amcduffie7@tripod.com"},
    {"firstname":"Thorin","lastname":"Wicher","email":"twicher8@geocities.jp"},
    {"firstname":"Hazlett","lastname":"Fordy","email":"hfordy9@google.ca"},
    {"firstname":"Bart","lastname":"Bosnell","email":"bbosnella@wp.com"},
    {"firstname":"Henrie","lastname":"Hovee","email":"hhoveeb@ycombinator.com"},
    {"firstname":"Teresita","lastname":"Dawney","email":"tdawneyc@apache.org"},
    {"firstname":"Melania","lastname":"Annand","email":"mannandd@parallels.com"},
    {"firstname":"Felipe","lastname":"Roast","email":"froaste@free.fr"},
    {"firstname":"Hadley","lastname":"Sinnocke","email":"hsinnockef@abc.net.au"},
    {"firstname":"Kaylil","lastname":"Rambaut","email":"krambautg@nydailynews.com"},
    {"firstname":"Clyde","lastname":"Redmayne","email":"credmayneh@columbia.edu"},
    {"firstname":"Pablo","lastname":"Crang","email":"pcrangi@jimdo.com"},
    {"firstname":"Trumann","lastname":"Forri","email":"tforrij@unesco.org"},
    {"firstname":"Julianne","lastname":"Hopkyns","email":"jhopkynsk@usda.gov"},
    {"firstname":"Georg","lastname":"Paulot","email":"gpaulotl@domainmarket.com"},
    {"firstname":"Peri","lastname":"Audritt","email":"paudrittm@paypal.com"},
    {"firstname":"Mart","lastname":"Dusting","email":"mdustingn@hhs.gov"},
    {"firstname":"Rosa","lastname":"McNea","email":"rmcneao@a8.net"},
    {"firstname":"Wells","lastname":"Dufton","email":"wduftonp@nasa.gov"},
    {"firstname":"Clem","lastname":"Arnison","email":"carnisonq@utexas.edu"},
    {"firstname":"Cassandry","lastname":"Chessill","email":"cchessillr@yelp.com"},
    {"firstname":"Alyda","lastname":"Fernando","email":"afernandos@ucla.edu"},
    {"firstname":"Lisa","lastname":"Matussov","email":"lmatussovt@friendfeed.com"}]
}
