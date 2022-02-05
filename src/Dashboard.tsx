import { Grid } from "@mui/material";
import { DashboardAppbar } from "./Components/DashboardAppbar";
import { DayCard } from "./Components/DayCard";

const workouts = [
  {
    name: "Biceps",
    url: "https://api.time.com/wp-content/uploads/2020/03/gym-coronavirus.jpg",
  },
  {
    name: "Triceps",
    url: "https://content.presspage.com/uploads/2110/1920_gym-covid-19-mask-risk-gettyimages.jpg?10000",
  },
  {
    name: "Legs",
    url: "https://www.maximuscle.com/Images/Article/large/legs-workout.jpg",
  },
  {
    name: "Back",
    url: "https://www.mensjournal.com/wp-content/uploads/mf/_main_back_0.jpg?w=900&h=506&crop=1&quality=86&strip=all",
  },
  {
    name: "Shoulders",
    url: "https://manofmany.com/wp-content/uploads/2019/03/10-Best-Shoulder-Exercises-for-Men-Man-lifting-weights-shoulder-muscle.jpg",
  },
  {
    name: "Abs",
    url: "https://www.muscleandfitness.com/wp-content/uploads/2019/05/1109-Bodybuilder-Abs-GettyImages-530503912.jpg?quality=86&strip=all",
  },
];

export const Dashboard = () => {
  return (
    <div>
      <DashboardAppbar />
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        height="100vh"
      >
        {workouts.map((workout) => {
          return (
            <Grid item>
              <DayCard day={workout.name} url={workout.url} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
