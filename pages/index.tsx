import React, { ReactElement, useState, useEffect, useRef } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./../styles/ticket.style";
import { Button, Card, Container, Grid } from "@material-ui/core";
import Router from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Actions from "./../redux/actions";
import { StatusListReducer } from "../types/statusList.reducer.types";
import { TicketListReducer } from "../types/ticketList.reducer.types";
import { StatusByIdListReducer } from "../types/statusByIdList.reducer.types";
import DataRows from "../components/DataRows";
import { Status } from "../types/status.type";
import { Ticket } from "../types/ticket.type";
import Moment from "react-moment";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
import EditIcon from "@material-ui/icons/Edit";
import { gsap } from "gsap";

interface Props {}

const useStyles = makeStyles(styles);

export default function index({}: Props): ReactElement {
  const classes = useStyles();
  const dispatch = useDispatch();
  const title_gsap_ref = useRef(null);

  const [dataTicket, setDataTicket] = useState([]);

  const statusListReducer: StatusListReducer = useSelector(
    ({ statusListReducer }: any) => statusListReducer
  );

  const ticketListReducer: TicketListReducer = useSelector(
    ({ ticketListReducer }: any) => ticketListReducer
  );

  const statusByIdListReducer: StatusByIdListReducer = useSelector(
    ({ statusByIdListReducer }: any) => statusByIdListReducer
  );

  useEffect(() => {
    gsap.from(title_gsap_ref.current, {
      duration: 2.5,
      ease: "elastic.out(1,0.3)",
      y: -500,
      delay: 0.5,
    });
  }, [title_gsap_ref]);

  useEffect(() => {
    dispatch(Actions.feedStatusList());
    dispatch(Actions.feedTicketList());
  }, []);

  useEffect(() => {
    if (ticketListReducer.result) setDataTicket(ticketListReducer.result.data);
  }, [ticketListReducer]);

  useEffect(() => {
    if (statusByIdListReducer.result)
      setDataTicket(statusByIdListReducer.result.data);
  }, [statusByIdListReducer]);

  return (
    <Container fixed className={classes.section_style}>
      <Typography
        variant="h1"
        align="center"
        className={classes.header_style}
        ref={title_gsap_ref}
      >
        Ticket Management Application,
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className={classes.section_filter_style}
      >
        {(statusListReducer.result ? statusListReducer.result.data : []).map(
          ({ status, id }: Status, index) => {
            return (
              <Button
                key={index}
                variant="outlined"
                color="secondary"
                className={classes.button_filter_style}
                onClick={() => dispatch(Actions.feedStatusByIdList(id))}
              >
                {status}
              </Button>
            );
          }
        )}
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Link href={"/create"}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            className={classes.button_create_style}
          >
            <Typography
              variant="h6"
              align="center"
              className={classes.button_create_text_style}
            >
              Create Ticket
            </Typography>
          </Button>
        </Link>
      </Grid>
      <Container maxWidth="md">
        <Grid container className={classes.section_table_style}>
          <Grid item xs={12}>
            {(dataTicket ? dataTicket : []).map(
              (
                {
                  id,
                  title,
                  description,
                  status,
                  contact,
                  CreatedAt,
                  UpdatedAt,
                }: Ticket,
                index
              ) => {
                return (
                  <Card key={index} className={classes.card}>
                    <Grid
                      container
                      direction="row"
                      justify="space-evenly"
                      alignItems="center"
                    >
                      <Typography
                        variant="body1"
                        className={classes.card_title}
                      >
                        <strong>Updated At วันที่อัพเดทล่าสุด</strong> <br />
                        <Moment>{UpdatedAt}</Moment>
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.card_title}
                      >
                        <strong>Title</strong> <br />
                        {title}
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.card_title}
                      >
                        <strong>Description</strong> <br />
                        {description}
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.card_title}
                      >
                        <strong>Status</strong> <br />
                        {status.status}
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.card_title}
                      >
                        <strong>Contact</strong> <br />
                        {`${contact.name} - ${contact.tel}`}
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      justify="space-evenly"
                      alignItems="stretch"
                      className={classes.card_container_button}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() =>
                          dispatch(Actions.deleteTicket(id, dispatch))
                        }
                      >
                        <RestoreFromTrashIcon />
                      </Button>

                      <Link href={"/edit/" + id}>
                        <Button variant="contained" color="primary">
                          <EditIcon />
                        </Button>
                      </Link>
                    </Grid>
                  </Card>
                );
              }
            )}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
