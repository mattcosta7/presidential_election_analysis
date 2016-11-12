import electionData from 'presidential-election-data';
import data2016 from './2016.json';
let myData = electionData;
myData['2016'] = data2016;

export default class ElectionData {

  static getDataNeat(){
    let data = {};
    for (var year in myData){
      if(year >= 1992){
        data[year] = [];
        const rep_candidate = myData[year]["candidates"]["republican"];
        const dem_candidate = myData[year]["candidates"]["democrat"];
        data[year]["candidates"] = {
          republican: rep_candidate,
          democrat: dem_candidate
        };
        data[year]['votes'] = [];
        for(var state in myData[year]['votes']){
          const item = myData[year]['votes'][state];
          const popular_democrat = parseFloat(item['popular']['democrat']);
          const popular_republican = parseFloat(item['popular']['republican']);
          const popular_other = parseFloat(item['popular']['other']);
          const electoral_democrat = parseFloat(item['electoral']['democrat']);
          const electoral_republican = parseFloat(item['electoral']['republican']);
          const total_popular_votes = parseFloat(popular_democrat + popular_republican);
          const total_popular_votes_3rd = total_popular_votes + popular_other;
          const total_electoral = parseFloat(electoral_democrat + electoral_republican);
          const percent_popular_dem = parseFloat(popular_democrat / total_popular_votes);
          const percent_popular_rep = parseFloat(popular_republican / total_popular_votes);
          const percent_popular_others = parseFloat(popular_other / total_popular_votes_3rd);
          const percent_popular_dem3rd = parseFloat(popular_democrat / total_popular_votes_3rd);
          const percent_popular_rep3rd = parseFloat(popular_republican / total_popular_votes_3rd);
          data[year]["votes"].push({
            state: state,
            results: {
              electoral_democrat: electoral_democrat,
              electoral_republican: electoral_republican,
              electoral_vote_total: total_electoral,
              electoral_others: 0,
              popular_total_no_3rd: total_popular_votes,
              popular_total_3rd: total_popular_votes + popular_other,
              popular_democrat: popular_democrat,
              popular_republican: popular_republican,
              electoral_dem_should_have: Math.round(total_electoral * percent_popular_dem),
              electoral_rep_should_have: Math.round(total_electoral * percent_popular_rep),
              others_should_have: Math.round(total_electoral * percent_popular_others),
              electoral_dem_should_have3rd: Math.round(total_electoral * percent_popular_dem3rd),
              electoral_rep_should_have3rd: Math.round(total_electoral * percent_popular_rep3rd),
            },
          });
        }
      }
    }
    return data;
  }

  static getDetails(){
    const data = this.getDataNeat();
    const myData = Object.keys(data).map(function(year){
      const rep_candidate = data[year]['candidates']['republican'];
      const dem_candidate = data[year]['candidates']['democrat'];
      const national_electoral_democrat = data[year]['votes'].map(function(item){
        return item['results']['electoral_democrat'];
      }).reduce(function(a,b){
        return a+b;
      });
      const national_electoral_republican = data[year]['votes'].map(function(item){
        return item['results']['electoral_republican'];
      }).reduce(function(a,b){
        return a+b;
      });
      const national_electoral_dem_should_have =   data[year]['votes'].map(function(item){
        return item['results']['electoral_dem_should_have'];
      }).reduce(function(a,b){
        return a+b;
      });
      const national_electoral_rep_should_have = data[year]['votes'].map(function(item){
        return item['results']['electoral_rep_should_have'];
      }).reduce(function(a,b){
        return a+b;
      });
      const national_electoral_others = data[year]['votes'].map(function(item){
        return item['results']['electoral_others'];
      }).reduce(function(a,b){
        return a+b;
      });
      const national_electoral_others_should_have = data[year]['votes'].map(function(item){
        return item['results']['others_should_have'];
      }).reduce(function(a,b){
        return a+b;
      });

      const national_electoral_dem_should_have3rd = data[year]['votes'].map(function(item){
        return item['results']['electoral_dem_should_have3rd'];
      }).reduce(function(a,b){
        return a+b;
      });
      const national_electoral_rep_should_have3rd = data[year]['votes'].map(function(item){
        return item['results']['electoral_rep_should_have3rd'];
      }).reduce(function(a,b){
        return a+b;
      });

      const national_popular_republic = data[year]['votes'].map(function(item){
        return item['results']['popular_republican'];
      }).reduce(function(a,b){
        return a+b;
      });

      const national_popular_democrat = data[year]['votes'].map(function(item){
        return item['results']['popular_democrat'];
      }).reduce(function(a,b){
        return a+b;
      });

      return {
        year: year,
        candidates: {
          republican: rep_candidate,
          democrat: dem_candidate,

        },
        results: {
          popular: {
            actual: {
              democrat: national_popular_democrat,
              republican: national_popular_republic
            }
          },
          electoral: {
            actual: {
              democrat: national_electoral_democrat,
              republican: national_electoral_republican,
              others: national_electoral_others
            },
            proportionalWithThirdParty:{
              democrat: national_electoral_dem_should_have3rd,
              republican: national_electoral_rep_should_have3rd,
              others: national_electoral_others_should_have
            },
            proportionalWithoutThirdParty:{
              democrat: national_electoral_dem_should_have,
              republican: national_electoral_rep_should_have,
              others: 0
            }
          }

        }
      };
    });
    return myData;
  }
}
