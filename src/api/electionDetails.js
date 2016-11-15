import Data from './dataCombiner';

export default class ElectionData {

  static getDataNeat() {
    const data = {};
    for (const year in Data) {
      if (year >= 1964) {
        data[year] = [];
        const repCandidate = Data[year].candidates.republican;
        const demCandidate = Data[year].candidates.democrat;
        data[year].candidates = {
          republican: repCandidate,
          democrat: demCandidate
        };
        data[year].votes = [];
        for (const state in Data[year].votes) {
          if (Data[year].votes.hasOwnProperty(state)) {
            const item = Data[year].votes[state];
            const popularDemocrat = parseFloat(item.popular.democrat);
            const popularRepublican = parseFloat(item.popular.republican);
            const popularOther = parseFloat(item.popular.other);
            const electoralDemocrat = parseFloat(item.electoral.democrat);
            const electoralRepublican = parseFloat(item.electoral.republican);
            const totalPopularVotes = parseFloat(popularDemocrat + popularRepublican);
            const totalPopularVotes3rd = totalPopularVotes + popularOther;
            const totalElectoral = parseFloat(electoralDemocrat + electoralRepublican);
            const percentPopularDems = parseFloat(popularDemocrat / totalPopularVotes);
            const percentPopularReps = parseFloat(popularRepublican / totalPopularVotes);
            const percentPopularOther = parseFloat(popularOther / totalPopularVotes3rd);
            const percentPopularDemThird = parseFloat(popularDemocrat / totalPopularVotes3rd);
            const percentPopularRepThird = parseFloat(popularRepublican / totalPopularVotes3rd);
            const electoralDemsShouldHave = totalElectoral * percentPopularDems;
            const electoralRepsShouldHave = totalElectoral * percentPopularReps;
            const othersShouldHave = totalElectoral * percentPopularOther;
            const electoralDemsShouldHave3rd = totalElectoral * percentPopularDemThird;
            const electoralRepsShouldHave3rd = totalElectoral * percentPopularRepThird;
            const othersWithBonus = (totalElectoral - 2) * percentPopularOther;
            const demsWithBonus3rd = ((totalElectoral - 2) * percentPopularDemThird) + (percentPopularDemThird > percentPopularRepThird ? 2 : 0);
            const repsWithBonus3rd = ((totalElectoral - 2) * percentPopularRepThird) + (percentPopularDemThird < percentPopularRepThird ? 2 : 0);
            const demsWithBonus = ((totalElectoral - 2) * percentPopularDems) + (percentPopularDems > percentPopularReps ? 2 : 0);
            const repsWithBonus = ((totalElectoral - 2) * percentPopularReps) + (percentPopularDems < percentPopularReps ? 2 : 0);
            data[year].votes.push({
              state: state,
              results: {
                electoralDemocrat: electoralDemocrat,
                electoralRepublican: electoralRepublican,
                electoralVoteTotal: totalElectoral,
                electoralOther: 0,
                popularTotalNo3rd: totalPopularVotes,
                popularTotal3rd: totalPopularVotes + popularOther,
                popularDemocrat: popularDemocrat,
                popularRepublican: popularRepublican,
                popularOther: popularOther,
                electoralDemsShouldHave: electoralDemsShouldHave,
                electoralRepsShouldHave: electoralRepsShouldHave,
                othersShouldHave: othersShouldHave,
                electoralDemsShouldHave3rd: electoralDemsShouldHave3rd,
                electoralRepsShouldHave3rd: electoralRepsShouldHave3rd,
                othersWithBonus: othersWithBonus,
                demsWithBonus3rd: demsWithBonus3rd,
                repsWithBonus3rd: repsWithBonus3rd,
                demsWithBonus: demsWithBonus,
                repsWithBonus: repsWithBonus
              },
            });
          }
        }
      }
    }
    return data;
  }

  static getCount(votes, field) {
    return votes.map(function countIt(state) {
      return state.results[field];
    }).reduce(function sum(a, b) {
      return a + b;
    });
  }

  static getByYear(year) {
    const data = this.getDetails();
    return data.filter(function yeara(obj) {
      return obj.year === year;
    })[0];
  }

  static getDetails() {
    const data = this.getDataNeat();
    return Object.keys(data).map(function getYear(year) {
      return {
        year: year,
        candidates: {
          republican: data[year].candidates.republican,
          democrat: data[year].candidates.democrat
        },
        results: {
          popular: {
            actual: {
              democrat: ElectionData.getCount(data[year].votes, 'popularDemocrat'),
              republican: ElectionData.getCount(data[year].votes, 'popularRepublican'),
              others: ElectionData.getCount(data[year].votes, 'popularOther')
            }
          },
          electoral: {
            actual: {
              democrat: ElectionData.getCount(data[year].votes, 'electoralDemocrat'),
              republican: ElectionData.getCount(data[year].votes, 'electoralRepublican'),
              others: ElectionData.getCount(data[year].votes, 'electoralOther')
            },
            proportionalWithThirdParty: {
              democrat: ElectionData.getCount(data[year].votes, 'electoralDemsShouldHave3rd'),
              republican: ElectionData.getCount(data[year].votes, 'electoralRepsShouldHave3rd'),
              others: ElectionData.getCount(data[year].votes, 'othersShouldHave')
            },
            proportionalWithoutThirdParty: {
              democrat: ElectionData.getCount(data[year].votes, 'electoralDemsShouldHave'),
              republican: ElectionData.getCount(data[year].votes, 'electoralRepsShouldHave'),
              others: 0
            },
            withElectoralBonus3rd: {
              democrat: ElectionData.getCount(data[year].votes, 'demsWithBonus3rd'),
              republican: ElectionData.getCount(data[year].votes, 'repsWithBonus3rd'),
              others: ElectionData.getCount(data[year].votes, 'othersWithBonus')
            },
            withElectoralBonus: {
              democrat: ElectionData.getCount(data[year].votes, 'demsWithBonus'),
              republican: ElectionData.getCount(data[year].votes, 'repsWithBonus'),
              others: 0
            }
          }
        }
      };
    });
  }
}
